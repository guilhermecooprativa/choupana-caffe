
// @ts-nocheck
"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + Morada */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">☕</span>
              </div>
              <span className="text-xl font-semibold">Choupana Caffe</span>
            </div>
            <address className="not-italic text-gray-300 text-sm leading-relaxed">
              Rua das Delícias, 123<br />
              1200-001 Lisboa, Portugal
            </address>
          </div>

          {/* Contactos */}
          <div className="space-y-2 text-sm">
            <p className="text-gray-400">
              <span className="inline-block w-16 text-gray-500">Telefone</span>
              <a href="tel:+351211234567" className="text-gray-200 hover:text-amber-400 transition-colors">+351 21 123 4567</a>
            </p>
            <p className="text-gray-400">
              <span className="inline-block w-16 text-gray-500">Email</span>
              <a href="mailto:info@choupanacaffe.pt" className="text-gray-200 hover:text-amber-400 transition-colors">info@choupanacaffe.pt</a>
            </p>
          </div>

          {/* Socials */}
          <div className="md:justify-end flex items-start">
            <div className="flex gap-3">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                <span>📷</span>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                <span>👥</span>
              </a>
              <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                <span>⭐</span>
              </a>
              <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Google" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center">
                <span>🔍</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Choupana Caffe. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-sm">
            Desenvolvido por <a href="https://cooprativa.pt" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">cooprativa.pt</a>
          </p>
        </div>
      </div>
    </footer>
  );
}