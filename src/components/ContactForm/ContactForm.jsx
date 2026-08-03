import { COLORS, STRINGS, CONFIG } from '../../constants';

export default function ContactForm() {
  return (
    <form
      action={`mailto:${CONFIG.email}`}
      method="POST"
      encType="text/plain"
      className="max-w-xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: COLORS.text }}>
            {STRINGS.contact.labels.name}
          </label>
          <input
            name="Nombre"
            type="text"
            className="w-full p-3 rounded border-2 transition focus:outline-none focus:ring-0"
            style={{
              borderColor: COLORS.lightGray,
              color: COLORS.text,
            }}
            onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
            onBlur={(e) => (e.target.style.borderColor = COLORS.lightGray)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: COLORS.text }}>
            {STRINGS.contact.labels.email}
          </label>
          <input
            name="Correo"
            type="email"
            className="w-full p-3 rounded border-2 transition focus:outline-none focus:ring-0"
            style={{
              borderColor: COLORS.lightGray,
              color: COLORS.text,
            }}
            onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
            onBlur={(e) => (e.target.style.borderColor = COLORS.lightGray)}
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: COLORS.text }}>
          {STRINGS.contact.labels.message}
        </label>
        <textarea
          name="Mensaje"
          className="w-full p-3 rounded border-2 transition focus:outline-none focus:ring-0"
          rows={4}
          style={{
            borderColor: COLORS.lightGray,
            color: COLORS.text,
          }}
          onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
          onBlur={(e) => (e.target.style.borderColor = COLORS.lightGray)}
          required
        />
      </div>

      <button
        type="submit"
        className="font-semibold py-3 px-8 rounded shadow transition text-white w-full"
        style={{
          backgroundColor: COLORS.primary,
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = COLORS.primaryDark)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = COLORS.primary)}
      >
        {STRINGS.contact.labels.send}
      </button>
    </form>
  );
}
