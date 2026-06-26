'use server'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { createSupabaseServerClient } from '@/lib/supabase-server'

type AuthState = { error?: string; success?: string } | undefined

export async function login(state: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Unesite email i lozinku.' }
  }

  const supabase = await createSupabaseServerClient()

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: 'Pogrešan email ili lozinka.' }
  }

  redirect('/dashboard')
}

export async function logout() {
  const supabase = await createSupabaseServerClient()
  await supabase.auth.signOut()
  redirect('/login')
}

export async function sendResetEmail(state: AuthState, formData: FormData): Promise<AuthState> {
  const email = (formData.get('email') as string)?.trim()

  if (!email) return { error: 'Unesite email adresu.' }

  const headersList = await headers()
  const origin = headersList.get('origin') ?? 'https://vida-espanol.vercel.app'

  const supabase = await createSupabaseServerClient()
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=/reset-password/update`,
  })

  if (error) return { error: 'Greška pri slanju emaila. Pokušaj ponovo.' }

  return { success: 'Email je poslat. Proveri sandučić.' }
}

export async function updatePassword(state: AuthState, formData: FormData): Promise<AuthState> {
  const password = formData.get('password') as string
  const confirm = formData.get('confirm') as string

  if (!password) return { error: 'Unesite novu lozinku.' }
  if (password.length < 8) return { error: 'Lozinka mora imati najmanje 8 karaktera.' }
  if (password !== confirm) return { error: 'Lozinke se ne poklapaju.' }

  const supabase = await createSupabaseServerClient()
  const { error } = await supabase.auth.updateUser({ password })

  if (error) return { error: 'Greška pri promeni lozinke. Link je možda istekao.' }

  redirect('/dashboard')
}

export async function signup(state: AuthState, formData: FormData): Promise<AuthState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const password = formData.get('password') as string
  const confirm = formData.get('confirm') as string

  if (!name || !email || !password) {
    return { error: 'Sva polja su obavezna.' }
  }

  if (password.length < 8) {
    return { error: 'Lozinka mora imati najmanje 8 karaktera.' }
  }

  if (password !== confirm) {
    return { error: 'Lozinke se ne poklapaju.' }
  }

  const supabase = await createSupabaseServerClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: name } },
  })

  if (error) {
    if (error.message.includes('already registered')) {
      return { error: 'Nalog sa ovim emailom već postoji.' }
    }
    return { error: 'Greška pri registraciji. Pokušaj ponovo.' }
  }

  redirect('/dashboard')
}
