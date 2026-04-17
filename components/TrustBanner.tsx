import { Check, ShieldCheck, RefreshCcw } from "lucide-react";

export default function TrustBanner() {
  return (
    <div className="w-full bg-white border-y border-black/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-10 text-secondary">
        
        <div className="flex flex-col items-center text-center gap-3">
          <Check strokeWidth={1.5} className="w-8 h-8 text-primary" />
          <div>
            <h4 className="font-bold text-primary tracking-wide text-sm uppercase mb-1">Free Fast Shipping</h4>
            <p className="text-sm font-medium">On all orders within the continental US.</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <RefreshCcw strokeWidth={1.5} className="w-8 h-8 text-primary" />
          <div>
            <h4 className="font-bold text-primary tracking-wide text-sm uppercase mb-1">30-Day Risk Free</h4>
            <p className="text-sm font-medium">Try it at home. Free returns if you don&apos;t love it.</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <ShieldCheck strokeWidth={1.5} className="w-8 h-8 text-primary" />
          <div>
            <h4 className="font-bold text-primary tracking-wide text-sm uppercase mb-1">3-Year Warranty</h4>
            <p className="text-sm font-medium">Built to withstand daily dynamic motion.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
