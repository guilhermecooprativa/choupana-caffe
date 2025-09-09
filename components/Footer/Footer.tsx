
// @ts-nocheck
"use client";

import SocialButton from '../SocialButton';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3 text-center justify-items-center">
          {/* Logo + Morada */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <img
                src="https://via.placeholder.com/40x40?text=Logo"
                alt="Choupana Caffe logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-semibold">Choupana Caffe</span>
            </div>
            <address className="not-italic text-gray-300 text-sm leading-relaxed">
              Rua das Delícias, 123<br />
              1200-001 Lisboa, Portugal
            </address>
          </div>

          {/* Contactos */}
          <div className="space-y-2 text-sm text-center">
            <p className="text-gray-400">
              <span className="text-gray-500">Telefone</span>
              <span className="mx-2">·</span>
              <a href="tel:+351211234567" className="text-gray-200 hover:text-amber-400 transition-colors">+351 21 123 4567</a>
            </p>
            <p className="text-gray-400">
              <span className="text-gray-500">Email</span>
              <span className="mx-2">·</span>
              <a href="mailto:info@choupanacaffe.pt" className="text-gray-200 hover:text-amber-400 transition-colors">info@choupanacaffe.pt</a>
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-start justify-center">
            <SocialButton />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Choupana Caffe. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-sm">
            Desenvolvido por <a href="https://cooprativa.pt" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">cooprativa.pt</a>
          </p>
        </div>
      </div>
    </footer>
  );
}