import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { logout } from '@/app/actions/auth'

const c = {
  bg: '#FFFFFF',
  border: '#EBEBEB',
  terra: '#C4845A',
  bordo: '#8B1A2E',
  yellow: '#E8C88A',
  dark: '#3D2B1F',
  mid: '#6B6560',
  light: '#9E9890',
  terraLight: '#FDF5F0',
  sand: '#F1E5D6',
}

const lekcije = [
  { n: '1', t: 'Pre dolaska', s: 'Najbitnije. Predstavi se, pozdravi, osnova svakog upoznavanja.', tag: 'Besplatno', free: true },
  { n: '2', t: 'Hola, recepcija, smeštaj', s: 'Stigla si. Prijava, WiFi, soba — bez stresa.', tag: null, free: false },
  { n: '3', t: 'Naruči u baru kao lokalka', s: 'Kafa, doručak, tapas — onako kako Španci zaista naručuju.', tag: null, free: false },
  { n: '4', t: 'Pričaj i pitaj · Small talk', s: '¿Qué tal? Odakle si, šta radiš tu — pravi razgovor.', tag: null, free: false },
  { n: '5', t: 'Snalaženje po gradu', s: 'Metro, put, karte, muzej — krećeš se sama.', tag: null, free: false },
  { n: '6', t: 'Večera u restoranu', s: 'Menú del día, vino, plaćanje — i znaš šta jedeš.', tag: null, free: false },
  { n: '7', t: 'Odlazak · Zbogom · Aerodrom', s: 'Oproštaj, check out, taksi — Volveré.', tag: null, free: false },
]

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const firstName = user.user_metadata?.full_name?.split(' ')[0]
    ?? user.email?.split('@')[0]
    ?? 'Dobrodošla'

  const grad = `linear-gradient(to right, ${c.sand}, ${c.yellow}, ${c.terra}, ${c.bordo})`

  return (
    <main style={{ background: c.bg, color: c.dark, minHeight: '100vh', fontSize: '15px' }}>

      {/* Gradient strip */}
      <div style={{ height: '2px', background: grad }} />

      {/* Nav */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 20px', borderBottom: `1px solid ${c.border}`,
        position: 'sticky', top: 0, background: c.bg, zIndex: 10,
      }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: c.dark, letterSpacing: '0.08em' }}>VIDA</div>
          <span style={{ fontStyle: 'italic', fontSize: '0.65rem', color: c.terra, display: 'block' }}>a la española</span>
        </div>
        <form action={logout}>
          <button
            type="submit"
            style={{
              background: 'none', border: `1.5px solid ${c.border}`, color: c.mid,
              padding: '8px 16px', borderRadius: '6px', fontSize: '0.78rem',
              fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            Odjavi se
          </button>
        </form>
      </nav>

      {/* Welcome */}
      <div style={{ padding: '32px 20px 24px', borderBottom: `1px solid ${c.border}` }}>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: c.terra, marginBottom: '8px' }}>
          Tvoj kurs
        </p>
        <h1 style={{ fontWeight: 700, fontSize: '1.5rem', color: c.dark, marginBottom: '6px', lineHeight: 1.2 }}>
          Hola, {firstName}! 👋
        </h1>
        <p style={{ color: c.mid, fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
          Una semana en España · 7 lekcija koje te čekaju
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.75rem', color: c.mid }}>Napredak</span>
          <span style={{ fontSize: '0.75rem', color: c.terra, fontWeight: 600 }}>0 / 7</span>
        </div>
        <div style={{ height: '6px', background: c.border, borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ width: '0%', height: '100%', background: `linear-gradient(to right, ${c.terra}, ${c.bordo})`, borderRadius: '99px' }} />
        </div>
      </div>

      {/* Lessons */}
      <div style={{ padding: '20px 0' }}>
        {lekcije.map((lek, i) => (
          <div
            key={i}
            style={{
              margin: '0 20px 12px',
              border: `1.5px solid ${i === 0 ? c.terra : c.border}`,
              borderRadius: '12px',
              padding: '18px 16px',
              background: i === 0 ? c.terraLight : c.bg,
            }}
          >
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              {/* Number */}
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
                background: i === 0 ? c.terra : c.border,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.85rem', fontWeight: 700,
                color: i === 0 ? '#fff' : c.light,
              }}>
                {lek.n}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: c.dark }}>{lek.t}</span>
                  {lek.free && (
                    <span style={{
                      fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: c.terra,
                      border: `1px solid ${c.terra}`, borderRadius: '4px', padding: '1px 6px',
                    }}>
                      Besplatno
                    </span>
                  )}
                </div>
                <p style={{ fontSize: '0.76rem', color: c.light, margin: '0 0 14px', lineHeight: 1.5 }}>{lek.s}</p>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button
                    style={{
                      background: i === 0 ? c.terra : c.border,
                      color: i === 0 ? '#fff' : c.light,
                      border: 'none', borderRadius: '7px', padding: '8px 18px',
                      fontSize: '0.78rem', fontWeight: 600, cursor: i === 0 ? 'pointer' : 'default',
                      fontFamily: 'inherit', letterSpacing: '0.04em',
                    }}
                  >
                    {i === 0 ? '▶ Slušaj' : '🔒 Zaključano'}
                  </button>
                  {i === 0 && (
                    <span style={{ fontSize: '0.72rem', color: c.light }}>~10 min</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buy CTA */}
      <div style={{
        margin: '8px 20px 32px',
        background: c.dark, borderRadius: '14px', padding: '24px 20px', textAlign: 'center',
      }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: c.yellow, marginBottom: '10px' }}>
          Otključaj sve lekcije
        </p>
        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '6px', lineHeight: 1.3 }}>
          7 lekcija · 6 meseci pristupa
        </p>
        <p style={{ fontSize: '0.8rem', color: '#9E9890', marginBottom: '20px' }}>
          Jednokratno plaćanje · Srpski jezik
        </p>
        <div style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
          <span style={{ fontSize: '0.9rem', color: c.yellow, verticalAlign: 'super', fontWeight: 600 }}>€</span>57
        </div>
        <a
          href="#"
          style={{
            display: 'block', background: c.terra, color: '#fff',
            padding: '14px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
          }}
        >
          Upiši me
        </a>
      </div>

      {/* Footer */}
      <div style={{ height: '2px', background: grad }} />
      <footer style={{ padding: '20px', textAlign: 'center', borderTop: `1px solid ${c.border}` }}>
        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: c.dark, letterSpacing: '0.1em' }}>VIDA</div>
        <span style={{ fontStyle: 'italic', fontSize: '0.7rem', color: c.terra, display: 'block', marginTop: '2px' }}>a la española</span>
        <p style={{ fontSize: '0.72rem', color: c.light, marginTop: '8px' }}>{user.email}</p>
      </footer>

    </main>
  )
}
