'use client'

import { useActionState } from 'react'
import { login } from '@/app/actions/auth'
import Link from 'next/link'

const c = {
  terra: '#C4845A',
  bordo: '#8B1A2E',
  yellow: '#E8C88A',
  dark: '#3D2B1F',
  mid: '#6B6560',
  light: '#9E9890',
  terraLight: '#FDF5F0',
  sand: '#F1E5D6',
  border: '#EBEBEB',
}

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined)

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
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {/* Logo / Brand */}
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
          <h1
            style={{
              color: c.dark,
              fontSize: '22px',
              fontWeight: '600',
              margin: '0 0 8px',
            }}
          >
            Dobrodošla nazad
          </h1>
          <p style={{ color: c.mid, fontSize: '14px', margin: '0 0 32px' }}>
            Prijavi se da nastaviš sa učenjem
          </p>

          <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label
                htmlFor="email"
                style={{ color: c.dark, fontSize: '13px', fontWeight: '500' }}
              >
                Email adresa
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="ime@primer.com"
                required
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: `1.5px solid ${c.border}`,
                  fontSize: '15px',
                  color: c.dark,
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = c.terra)}
                onBlur={(e) => (e.target.style.borderColor = c.border)}
              />
            </div>

            {/* Password */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label
                htmlFor="password"
                style={{ color: c.dark, fontSize: '13px', fontWeight: '500' }}
              >
                Lozinka
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: `1.5px solid ${c.border}`,
                  fontSize: '15px',
                  color: c.dark,
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.target.style.borderColor = c.terra)}
                onBlur={(e) => (e.target.style.borderColor = c.border)}
              />
            </div>

            {/* Forgot password */}
            <div style={{ textAlign: 'right', marginTop: '-8px' }}>
              <Link
                href="/reset-password"
                style={{ color: c.light, fontSize: '13px', textDecoration: 'none' }}
              >
                Zaboravila si lozinku?
              </Link>
            </div>

            {/* Error */}
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

            {/* Submit */}
            <button
              type="submit"
              disabled={pending}
              style={{
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
                transition: 'opacity 0.2s',
                fontFamily: 'inherit',
                letterSpacing: '0.3px',
              }}
            >
              {pending ? 'Prijavljivanje...' : 'Prijavi se'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p style={{ textAlign: 'center', color: c.mid, fontSize: '13px', marginTop: '24px' }}>
          Nemaš nalog?{' '}
          <Link href="/signup" style={{ color: c.terra, textDecoration: 'none', fontWeight: '500' }}>
            Registruj se
          </Link>
        </p>
      </div>
    </main>
  )
}
