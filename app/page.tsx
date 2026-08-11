export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f7fb",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "24px",
          borderRadius: "12px",
          background: "white",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        }}
      >
        <h1 style={{ marginBottom: "24px", fontSize: "24px", fontWeight: 600 }}>
          Login to QA Target
        </h1>

        <div style={{ display: "grid", gap: "14px" }}>
          <label>
            <div style={{ marginBottom: "6px", fontWeight: 500 }}>Username</div>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />
          </label>

          <label>
            <div style={{ marginBottom: "6px", fontWeight: 500 }}>Password</div>
            <input
              type="password"
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />
          </label>

          <button
            type="button"
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
}