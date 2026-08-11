"use client";

import { useEffect, useState } from "react";

const tableItems = ["Alpha", "Beta", "Gamma", "Delta"];

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  const [filter, setFilter] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [isDropped, setIsDropped] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleSubmit = () => {
    const nextUsernameError = username ? "" : "Username is required";
    const nextPasswordError = password ? "" : "Password is required";

    setUsernameError(nextUsernameError);
    setPasswordError(nextPasswordError);

    if (!username || !password) {
      return;
    }

    if (password !== "secret123") {
      setPasswordError("Wrong password");
      return;
    }

    setToast("Login successful");
    setShowModal(true);
  };

  const handleLoadData = () => {
    setLoading(true);
    setItems([]);

    window.setTimeout(() => {
      setItems(tableItems);
      setLoading(false);
    }, 1000);
  };

  const filteredItems = items.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));

  return (
    <main className="min-h-screen bg-zinc-100 p-6 text-zinc-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-2xl bg-white p-8 shadow-lg">
        <section>
          <h1 className="text-3xl font-semibold">QA Challenge Practice</h1>
          <p className="mt-2 text-zinc-600">
            Practice async loading, validation, modal overlays, and filtering with this UI.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-200 p-4">
          <h2 className="text-xl font-medium">Form Validation</h2>
          <div className="mt-4 grid gap-3">
            <label className="grid gap-1">
              <span>Username</span>
              <input
                className="rounded border border-zinc-300 px-3 py-2"
                data-testid="login-username-input"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <span className="text-sm text-red-600" data-testid="username-error">
                {usernameError}
              </span>
            </label>

            <label className="grid gap-1">
              <span>Password</span>
              <input
                className="rounded border border-zinc-300 px-3 py-2"
                data-testid="login-password-input"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="text-sm text-red-600" data-testid="password-error">
                {passwordError}
              </span>
            </label>

            <button
              className="rounded bg-blue-600 px-4 py-2 font-medium text-white"
              data-testid="login-submit-button"
              onClick={handleSubmit}
              type="button"
            >
              Sign In
            </button>
          </div>
        </section>

        <section className="rounded-xl border border-zinc-200 p-4">
          <h2 className="text-xl font-medium">Async Data Loading</h2>
          <button
            className="mt-3 rounded bg-zinc-800 px-4 py-2 font-medium text-white"
            data-testid="load-data-button"
            onClick={handleLoadData}
            type="button"
          >
            Load Data
          </button>

          {loading ? (
            <p className="mt-3 text-sm text-zinc-500" data-testid="loading-state">
              Loading data...
            </p>
          ) : null}

          <div className="mt-4 rounded border border-zinc-200 p-3" data-testid="loaded-data">
            {items.length > 0 ? (
              <>
                <input
                  className="mb-3 w-full rounded border border-zinc-300 px-3 py-2"
                  data-testid="filter-input"
                  placeholder="Filter rows"
                  value={filter}
                  onChange={(event) => setFilter(event.target.value)}
                />
                <ul className="space-y-2">
                  {filteredItems.map((item) => (
                    <li key={item} className="rounded bg-zinc-50 px-3 py-2" data-testid="item-row">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-sm text-zinc-500">No data loaded yet.</p>
            )}
          </div>
        </section>

        <section className="rounded-xl border border-zinc-200 p-4">
          <h2 className="text-xl font-medium">Modals & Toasts</h2>
          <button
            className="mt-3 rounded bg-emerald-600 px-4 py-2 font-medium text-white"
            onClick={() => setShowModal(true)}
            type="button"
          >
            Open Confirmation
          </button>
          {showModal ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
                <h3 className="text-lg font-semibold">Confirm action</h3>
                <p className="mt-2 text-sm text-zinc-600">Are you sure you want to continue?</p>
                <div className="mt-4 flex justify-end gap-3">
                  <button
                    className="rounded border border-zinc-300 px-3 py-2"
                    onClick={() => setShowModal(false)}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded bg-blue-600 px-3 py-2 text-white"
                    onClick={() => {
                      setShowModal(false);
                      setToast("Confirmed");
                    }}
                    type="button"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          {toast ? <div className="mt-3 rounded bg-zinc-800 px-3 py-2 text-sm text-white">{toast}</div> : null}
        </section>

        <section className="rounded-xl border border-zinc-200 p-4">
          <h2 className="text-xl font-medium">Extra QA Challenges</h2>
          <div className="mt-3 flex gap-2">
            <button
              className={`rounded px-3 py-2 ${activeTab === "overview" ? "bg-blue-600 text-white" : "bg-zinc-100"}`}
              onClick={() => setActiveTab("overview")}
              type="button"
            >
              Overview
            </button>
            <button
              className={`rounded px-3 py-2 ${activeTab === "details" ? "bg-blue-600 text-white" : "bg-zinc-100"}`}
              onClick={() => setActiveTab("details")}
              type="button"
            >
              Details
            </button>
          </div>

          <div className="mt-3 rounded border border-dashed border-zinc-300 p-4">
            {activeTab === "overview" ? <p>Overview tab content</p> : <p>Details tab content</p>}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div
              className={`rounded border border-zinc-300 px-4 py-3 ${isDropped ? "bg-emerald-50" : "bg-zinc-50"}`}
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => setIsDropped(true)}
            >
              Drop here
            </div>
            <span>{isDropped ? "Dropped" : "Waiting"}</span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              className="rounded bg-zinc-800 px-3 py-2 text-white disabled:cursor-not-allowed disabled:bg-zinc-400"
              disabled={isDisabled}
              onClick={() => setToast("Button enabled")}
              type="button"
            >
              Toggle Me
            </button>
            <button
              className="rounded border border-zinc-300 px-3 py-2"
              onClick={() => setIsDisabled((value) => !value)}
              type="button"
            >
              {isDisabled ? "Enable" : "Disable"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
