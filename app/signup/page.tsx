'use client'

import { useActionState } from 'react'
import { signup } from '@/app/actions/auth'
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

function Field({
  id, label, type = 'text', placeholder, error,
}: {
  id: string; label: string; type?: string; placeholder: string; error?: boolean
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label htmlFor={id} style={{ color: c.dark, fontSize: '13px', fontWeight: '500' }}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        style={{
          padding: '12px 16px',
          borderRadius: '10px',
          border: `1.5px solid ${error ? '#FECACA' : c.border}`,
          fontSize: '15px',
          color: c.dark,
          outline: 'none',
          fontFamily: 'inherit',
          background: '#fff',
        }}
        onFocus={(e) => (e.target.style.borderColor = c.terra)}
        onBlur={(e) => (e.target.style.borderColor = error ? '#FECACA' : c.border)}
      />
    </div>
  )
}

export default function SignupPage() {
  const [state, action, pending] = useActionState(signup, undefined)

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

        {/* Brand */}
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
          <p style={{ color: c.mid, fontSize: '14px', margin: 0 }}>
            Una Semana en España
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 24px rgba(61,43,31,0.08)',
          }}
        >
          <h1 style={{ color: c.dark, fontSize: '22px', fontWeight: '600', margin: '0 0 4px' }}>
            Kreiraj nalog
          </h1>
          <p style={{ color: c.mid, fontSize: '14px', margin: '0 0 28px' }}>
            Počni sa učenjem španskog danas
          </p>

          <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <Field id="name" label="Ime" placeholder="Ana Marković" error={!!state?.error} />
            <Field id="email" label="Email adresa" type="email" placeholder="ime@primer.com" error={!!state?.error} />
            <Field id="password" label="Lozinka" type="password" placeholder="Min. 8 karaktera" error={!!state?.error} />
            <Field id="confirm" label="Potvrdi lozinku" type="password" placeholder="Ponovi lozinku" error={!!state?.error} />

            {state?.error && (
              <div
                style={{
                  background: '#FEF2F2',
                  border: '1px solid #FECACA',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  color: '#B91C1C',
                  fontSize: '13px',
                }}
              >
                {state.error}
              </div>
            )}

            <button
              type="submit"
              disabled={pending}
              style={{
                marginTop: '4px',
                padding: '14px',
                borderRadius: '10px',
                border: 'none',
                background: pending
                  ? c.light
                  : `linear-gradient(135deg, ${c.terra}, ${c.bordo})`,
                color: '#fff',
                fontSize: '15px',
                fontWeight: '600',
                cursor: pending ? 'not-allowed' : 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.3px',
              }}
            >
              {pending ? 'Kreiranje naloga...' : 'Kreiraj nalog'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p style={{ textAlign: 'center', color: c.mid, fontSize: '13px', marginTop: '24px' }}>
          Već imaš nalog?{' '}
          <Link href="/login" style={{ color: c.terra, textDecoration: 'none', fontWeight: '500' }}>
            Prijavi se
          </Link>
        </p>
      </div>
    </main>
  )
}
