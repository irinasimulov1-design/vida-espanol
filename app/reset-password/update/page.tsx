'use client'

import { useEffect, useState, useCallback } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import Link from 'next/link'

const c = {
  terra: '#C4845A',
  bordo: '#8B1A2E',
  dark: '#3D2B1F',
  mid: '#6B6560',
  light: '#9E9890',
  terraLight: '#FDF5F0',
  border: '#EBEBEB',
}

export default function UpdatePasswordPage() {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState<string>()
  const [pending, setPending] = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)
    const access_token = params.get('access_token')
    const refresh_token = params.get('refresh_token')

    if (access_token && refresh_token) {
      supabase.auth.setSession({ access_token, refresh_token }).then(({ error }) => {
        if (error) setError('Link je istekao. Zatraži novi reset email.')
        else setReady(true)
      })
    } else {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) setReady(true)
        else setError('Link je istekao. Zatraži novi reset email.')
      })
    }
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(undefined)
    setPending(true)

    const formData = new FormData(e.currentTarget)
    const password = formData.get('password') as string
    const confirm = formData.get('confirm') as string

    if (password.length < 8) {
      setError('Lozinka mora imati najmanje 8 karaktera.')
      setPending(false)
      return
    }
    if (password !== confirm) {
      setError('Lozinke se ne poklapaju.')
      setPending(false)
      return
    }

    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setError('Greška pri promeni lozinke. Link je možda istekao.')
      setPending(false)
    } else {
      window.location.href = '/dashboard'
    }
  }, [supabase])

  return (
    <main
      style={{
        minHeight: '100vh',
        background: c.terraLight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-block',
              background: `linear-gradient(135deg, ${c.terra}, ${c.bordo})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '36px',
              fontWeight: '700',
              letterSpacing: '6px',
              marginBottom: '8px',
            }}
          >
            VIDA
          </div>
          <p style={{ color: c.mid, fontSize: '14px', margin: 0 }}>Una Semana en España</p>
        </div>

        <div
          style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 24px rgba(61,43,31,0.08)',
          }}
        >
          <h1 style={{ color: c.dark, fontSize: '22px', fontWeight: '600', margin: '0 0 4px' }}>
            Nova lozinka
          </h1>
          <p style={{ color: c.mid, fontSize: '14px', margin: '0 0 28px' }}>
            Unesite novu lozinku za tvoj nalog.
          </p>

          {!ready && !error && (
            <p style={{ color: c.light, fontSize: '14px', textAlign: 'center' }}>Učitavanje...</p>
          )}

          {error && !ready && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
              <p style={{ color: '#B91C1C', fontWeight: '600', margin: '0 0 8px' }}>Link je istekao</p>
              <p style={{ color: '#B91C1C', fontSize: '13px', margin: 0 }}>{error}</p>
            </div>
          )}

          {ready && (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {(['password', 'confirm'] as const).map((field) => (
                <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor={field} style={{ color: c.dark, fontSize: '13px', fontWeight: '500' }}>
                    {field === 'password' ? 'Nova lozinka' : 'Potvrdi lozinku'}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type="password"
                    placeholder={field === 'password' ? 'Min. 8 karaktera' : 'Ponovi lozinku'}
                    required
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: `1.5px solid ${c.border}`,
                      fontSize: '15px',
                      color: c.dark,
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = c.terra)}
                    onBlur={(e) => (e.target.style.borderColor = c.border)}
                  />
                </div>
              ))}

              {error && (
                <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '12px 16px', color: '#B91C1C', fontSize: '13px' }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={pending}
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  border: 'none',
                  background: pending ? c.light : `linear-gradient(135deg, ${c.terra}, ${c.bordo})`,
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: pending ? 'not-allowed' : 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {pending ? 'Čuvanje...' : 'Sačuvaj novu lozinku'}
              </button>
            </form>
          )}
        </div>

        <p style={{ textAlign: 'center', color: c.mid, fontSize: '13px', marginTop: '24px' }}>
          <Link href="/login" style={{ color: c.terra, textDecoration: 'none', fontWeight: '500' }}>
            ← Nazad na prijavu
          </Link>
        </p>
      </div>
    </main>
  )
}
