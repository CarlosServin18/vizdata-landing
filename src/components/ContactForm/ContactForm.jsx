import { COLORS, STRINGS, CONFIG } from '../../constants';

export default function ContactForm() {
  return (
    <form
      action={`mailto:${CONFIG.email}`}
      method="POST"
      encType="text/plain"
      className="max-w-xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          name="Nombre"
          type="text"
          placeholder={STRINGS.contact.labels.name}
          className="w-full p-3 rounded shadow"
          style={{
            border: `1px solid ${COLORS.lightGray}`,
          }}
          required
        />
        <input
          name="Correo"
          type="email"
          placeholder={STRINGS.contact.labels.email}
          className="w-full p-3 rounded shadow"
          style={{
            border: `1px solid ${COLORS.lightGray}`,
          }}
          required
        />
      </div>
      <textarea
        name="Mensaje"
        placeholder={STRINGS.contact.labels.message}
        className="w-full p-3 rounded shadow mb-4"
        rows={4}
        style={{
          border: `1px solid ${COLORS.lightGray}`,
        }}
        required
      />
      <button
        type="submit"
        className="font-semibold py-3 px-8 rounded shadow transition text-white"
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
