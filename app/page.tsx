const c = {
  bg: "#FFFFFF",
  border: "#EBEBEB",
  terra: "#C4845A",
  bordo: "#8B1A2E",
  yellow: "#E8C88A",
  dark: "#3D2B1F",
  mid: "#6B6560",
  light: "#9E9890",
  terraLight: "#FDF5F0",
  sand: "#F1E5D6",
};

const grad = `linear-gradient(to right, ${c.sand}, ${c.yellow}, ${c.terra}, ${c.bordo})`;

const lekcije = [
  { n: "1", t: "Pre dolaska", s: "Najbitnije. Predstavi se, pozdravi, osnova svakog upoznavanja." },
  { n: "2", t: "Hola, recepcija, smeštaj", s: "Stigla si. Prijava, WiFi, soba — bez stresa." },
  { n: "3", t: "Naruči u baru kao lokalka", s: "Kafa, doručak, tapas — onako kako Španci zaista naručuju." },
  { n: "4", t: "Pričaj i pitaj · Small talk", s: "¿Qué tal? Odakle si, šta radiš tu — pravi razgovor." },
  { n: "5", t: "Snalaženje po gradu", s: "Metro, put, karte, muzej — krećeš se sama." },
  { n: "6", t: "Večera u restoranu", s: "Menú del día, vino, plaćanje — i znaš šta jedeš." },
  { n: "7", t: "Odlazak · Zbogom · Aerodrom", s: "Oproštaj, check out, taksi — Volveré." },
];

const ukljuceno = [
  "7 kratkih audio lekcija",
  "Realan život na španskom",
  "PDF materijali uz svaku lekciju",
  "Aplikacija VIDA za vežbu",
];

export default function Home() {
  return (
    <main style={{ background: c.bg, color: c.dark, fontSize: "15px", lineHeight: 1.65 }}>

      {/* ── Gradient strip ── */}
      <div style={{ height: "2px", background: grad }} />

      {/* ── Nav ── */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 20px", borderBottom: `1px solid ${c.border}`,
        position: "sticky", top: 0, background: c.bg, zIndex: 10,
      }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: "1.1rem", color: c.dark, letterSpacing: "0.08em" }}>VIDA</div>
          <span style={{ fontStyle: "italic", fontSize: "0.65rem", color: c.terra, display: "block" }}>a la española</span>
        </div>
        <a href="#kupi" style={{
          background: c.terra, color: "white", padding: "9px 18px", borderRadius: "6px",
          fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em",
          textTransform: "uppercase", textDecoration: "none",
        }}>Upiši me</a>
      </nav>

      {/* ── Hero ── */}
      <div style={{ padding: "52px 20px 44px", textAlign: "center", borderBottom: `1px solid ${c.border}` }}>
        <p style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: c.terra, marginBottom: "16px" }}>
          Online audio kurs španskog · Za početnike
        </p>
        <h1 style={{ fontWeight: 700, fontSize: "2rem", color: c.dark, lineHeight: 1.2, marginBottom: "10px" }}>
          Ti, ja i Španija —<br />
          <em style={{ color: c.terra, fontStyle: "italic" }}>ovaj put na španskom.</em>
        </h1>
        <p style={{ fontSize: "0.9rem", color: c.mid, marginBottom: "28px", maxWidth: "320px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
          7 lekcija. 7 pravih situacija. Za jednu opuštenu prvu nedelju u Španiji.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <a href="#kupi" style={{
            background: c.terra, color: "white", padding: "15px 36px", borderRadius: "7px",
            fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", textDecoration: "none", display: "inline-block",
          }}>Upiši me · 57€</a>
          <a href="#besplatno" style={{
            border: `1.5px solid ${c.terra}`, color: c.terra, padding: "12px 28px",
            borderRadius: "7px", fontSize: "0.8rem", fontWeight: 500,
            textDecoration: "none", display: "inline-block",
          }}>Probaj besplatno →</a>
        </div>
        <p style={{ fontSize: "0.78rem", color: c.light, marginTop: "14px" }}>
          ili <strong style={{ color: c.dark, fontSize: "1rem", fontWeight: 600 }}>Lekcija 1 besplatno</strong> — bez obaveze
        </p>
      </div>

      {/* ── Meta strip ── */}
      <div style={{ display: "flex", borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}` }}>
        {[
          { n: "7", l: "lekcija" },
          { n: "~10′", l: "po lekciji" },
          { n: "SR", l: "jezik" },
          { n: "6 mes", l: "pristup" },
        ].map((item, i, arr) => (
          <div key={i} style={{
            flex: 1, padding: "14px 6px", textAlign: "center",
            borderRight: i < arr.length - 1 ? `1px solid ${c.border}` : "none",
          }}>
            <span style={{ fontWeight: 700, fontSize: "1.2rem", color: c.terra, display: "block" }}>{item.n}</span>
            <span style={{ fontSize: "0.65rem", color: c.light }}>{item.l}</span>
          </div>
        ))}
      </div>

      {/* ── Uvod — tamna ── */}
      <div style={{ background: c.dark, padding: "44px 20px" }}>
        <p style={{ fontStyle: "italic", fontSize: "1.15rem", color: "#E8D5BC", lineHeight: 1.7, marginBottom: "20px" }}>
          Put u voljenu Španiju je iza ugla. Stigneš.<br /><br />
          I hoćeš da budeš neko ko se snađe. Ko naruči kafu bez pokazivanja prstom. Ko čuje{" "}
          <span style={{ color: c.yellow, fontStyle: "normal", fontWeight: 700 }}>¿qué tal?</span>
          {" "}i odgovori kao da je to najprirodnija stvar na svetu.
        </p>
        <p style={{ fontSize: "0.88rem", color: "#9E9890", lineHeight: 1.8 }}>
          Ne govori onaj ko zna puno — već onaj ko ume da iskoristi i malo.<br /><br />
          Ovaj kurs je to malo. Ali pravo.
        </p>
      </div>

      {/* ── Za koga ── */}
      <div style={{ padding: "32px 20px", borderBottom: `1px solid ${c.border}` }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: c.terra, marginBottom: "8px" }}>Za koga je ovaj kurs</p>
        <h2 style={{ fontWeight: 700, fontSize: "1.15rem", color: c.dark, marginBottom: "14px", lineHeight: 1.3 }}>Ovo si ti</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
          {["Tek počinješ, nemaš predznanje", "Imaš osnove ali pasivno — razumeš nešto, ne progovoriš"].map((text, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "0.88rem", color: c.mid, lineHeight: 1.6 }}>
              <span style={{ color: c.terra, fontSize: "0.9rem", flexShrink: 0, marginTop: "2px", fontWeight: 600 }}>→</span>
              {text}
            </div>
          ))}
          <p style={{ fontSize: "0.68rem", color: c.light, letterSpacing: "0.1em", textTransform: "uppercase", margin: "12px 0 10px" }}>I jedno od ovoga</p>
          {["Ideš na odmor, u posetu, poslom ili se seliš", "Španija ti nije strana — samo jezik jeste"].map((text, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "0.88rem", color: c.mid, lineHeight: 1.6 }}>
              <span style={{ color: c.terra, fontSize: "0.9rem", flexShrink: 0, marginTop: "2px", fontWeight: 600 }}>→</span>
              {text}
            </div>
          ))}
        </div>
        <div style={{ background: c.sand, borderRadius: "10px", padding: "18px 16px", marginTop: "14px" }}>
          <div style={{ fontSize: "0.78rem", fontWeight: 600, color: c.dark, marginBottom: "8px" }}>Slušaš kad hoćeš i gde hoćeš</div>
          <div style={{ fontSize: "0.85rem", color: c.mid, lineHeight: 1.7 }}>
            U jednom mahu za{" "}
            <span style={{ color: c.terra, fontWeight: 500 }}>sat i deset minuta</span>. Ili{" "}
            <span style={{ color: c.terra, fontWeight: 500 }}>10 minuta, 7 dana</span>{" "}
            — dok voziš, šetaš bebu, vežbaš, kuvaš, imaš svojih 10 minuta.
          </div>
        </div>
      </div>

      {/* ── Filozofija — yellow ── */}
      <div style={{ background: c.yellow, padding: "36px 20px" }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a5c30", marginBottom: "8px" }}>Zašto ovaj kurs</p>
        <h2 style={{ fontWeight: 700, fontSize: "1.1rem", color: c.dark, marginBottom: "14px", lineHeight: 1.35 }}>
          Bez pritiska gramatike i pravila.<br />Samo živi jezik. Sa ulica Madrida.
        </h2>
        <p style={{ fontSize: "0.88rem", color: "#5a3d20", lineHeight: 1.8, marginBottom: "14px" }}>
          Ovaj vid učenja oslobađa te od težnje za savršenstvom — a to je najveći neprijatelj komunikaciji.
        </p>
        <p style={{ fontSize: "0.88rem", color: "#5a3d20", lineHeight: 1.8, marginBottom: "14px" }}>
          Posle ovog kursa možda nećeš znati celu gramatiku ni mnoga pravila. I bićeš ok sa tim — jer ti to za ovo ni ne treba. Imaćeš nešto važnije: <strong>početak</strong>. I to ne bilo kakav — već najšpanskiji mogući.
        </p>
        <div style={{ fontStyle: "italic", fontSize: "1rem", color: c.dark, borderLeft: `3px solid ${c.terra}`, paddingLeft: "14px", lineHeight: 1.6, margin: "16px 0" }}>
          Saznaćeš kako Španci žive i pričaju — i zato nećeš učiti jezik iz knjige, već onaj zbog kog ti jedan Marcos ili Tania kažu: <em>„Uvau, kako to znaš?"</em>
        </div>
        <p style={{ fontStyle: "italic", fontSize: "0.95rem", color: c.bordo, fontWeight: 700, marginTop: "16px" }}>
          Jer španski se ne uči napamet. On se živi.
        </p>
      </div>

      {/* ── Lekcije ── */}
      <div style={{ paddingTop: "28px" }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: c.terra, marginBottom: "8px", padding: "0 20px" }}>7 lekcija · 7 situacija</p>
        <h2 style={{ fontWeight: 700, fontSize: "1.15rem", color: c.dark, marginBottom: "16px", lineHeight: 1.3, padding: "0 20px" }}>Za jednu sjajnu prvu nedelju u Španiji</h2>
        <div>
          {lekcije.map((lek, i) => (
            <div key={i} style={{
              display: "flex", gap: "14px", padding: "15px 20px",
              borderBottom: `1px solid ${c.border}`, alignItems: "flex-start",
            }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: c.terra, minWidth: "20px", flexShrink: 0 }}>{lek.n}</div>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 600, color: c.dark, marginBottom: "2px" }}>{lek.t}</div>
                <div style={{ fontSize: "0.76rem", color: c.light }}>{lek.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Besplatno ── */}
      <div id="besplatno" style={{ background: c.terraLight, border: `1px solid #f0ddd0`, padding: "28px 20px" }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: c.terra, marginBottom: "8px" }}>Probaj pre kupovine</p>
        <h2 style={{ fontWeight: 700, fontSize: "1.05rem", color: c.dark, marginBottom: "8px" }}>Lekcija 1 je besplatna</h2>
        <p style={{ fontSize: "0.85rem", color: c.mid, lineHeight: 1.7, marginBottom: "16px" }}>
          Počni, predstavi se, pozdravi — snađi se kada nešto ne razumeš. Tvoj prvi razgovor na španskom. Bez obaveze.
        </p>
        <a href="#" style={{
          border: `1.5px solid ${c.terra}`, color: c.terra, padding: "12px 28px",
          borderRadius: "7px", fontSize: "0.8rem", fontWeight: 500,
          textDecoration: "none", display: "inline-block",
        }}>Probaj besplatno →</a>
      </div>

      {/* ── CTA ── */}
      <div id="kupi" style={{ padding: "44px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: c.terra, marginBottom: "10px" }}>Kreni danas</p>
        <h2 style={{ fontWeight: 700, fontSize: "1.4rem", color: c.dark, marginBottom: "8px", lineHeight: 1.3 }}>
          Jedna nedelja.<br />Jedan jezik.<br />Tvoj tempo.
        </h2>
        <p style={{ fontSize: "0.85rem", color: c.mid, marginBottom: "24px", lineHeight: 1.7 }}>
          Koristiš jezik od prvog dana. Pričaš 100% onoga što naučiš.
        </p>
        <div style={{ fontSize: "2.6rem", fontWeight: 700, color: c.dark }}>
          <span style={{ fontSize: "1.1rem", color: c.terra, verticalAlign: "super", fontWeight: 600 }}>€</span>57
        </div>
        <p style={{ fontSize: "0.72rem", color: c.light, margin: "6px 0 22px" }}>
          Jednokratno · Pristup 6 meseci · Srpski jezik
        </p>
        <div style={{ textAlign: "left", maxWidth: "320px", margin: "0 auto 24px" }}>
          {ukljuceno.map((item, i) => (
            <div key={i} style={{
              display: "flex", gap: "10px", alignItems: "center",
              padding: "7px 0", borderBottom: `1px solid ${c.border}`,
              fontSize: "0.85rem", color: c.mid,
            }}>
              <span style={{ color: c.terra, fontWeight: 600, flexShrink: 0 }}>✓</span>
              {item}
            </div>
          ))}
        </div>
        <a href="#" style={{
          display: "block", background: c.terra, color: "white", padding: "17px",
          fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.1em",
          textTransform: "uppercase", borderRadius: "7px", textDecoration: "none",
          maxWidth: "320px", margin: "0 auto 10px",
        }}>Upiši me</a>
        <p style={{ fontSize: "0.72rem", color: c.light }}>Pitanja? Piši na Instagram ili email.</p>
      </div>

      {/* ── Vamos ── */}
      <div style={{ background: c.bordo, padding: "28px 20px", textAlign: "center" }}>
        <p style={{ fontStyle: "italic", fontSize: "1.5rem", color: "white", letterSpacing: "0.05em" }}>
          Venga, ¡vamos!
        </p>
      </div>

      {/* ── Gradient strip ── */}
      <div style={{ height: "2px", background: grad }} />

      {/* ── Footer ── */}
      <footer style={{ padding: "20px", textAlign: "center", borderTop: `1px solid ${c.border}` }}>
        <div style={{ fontWeight: 700, fontSize: "0.95rem", color: c.dark, letterSpacing: "0.1em" }}>VIDA</div>
        <span style={{ fontStyle: "italic", fontSize: "0.7rem", color: c.terra, display: "block", marginTop: "2px" }}>a la española</span>
      </footer>

    </main>
  );
}
