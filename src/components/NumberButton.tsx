type Props = {
  value: number;
  disabled?: boolean;
  used?: boolean;
  active?: boolean; // tebakan terakhir
  onClick: (n: number) => void;
};

export default function NumberButton({ value, disabled, used, active, onClick }: Props) {
  const base =
    // ukuran lebih kecil agar grid tidak mepet
    "h-20 w-20 md:h-24 md:w-24 rounded-2xl font-extrabold text-2xl md:text-3xl text-white " +
    "transition-all duration-200 focus:outline-none";
  const enabled =
    "bg-[linear-gradient(180deg,#FACC15_0%,#F59E0B_100%)] " +
    "shadow-[0_10px_24px_rgba(245,158,11,0.35)] hover:scale-110 active:scale-95";
  const dim = "bg-neutral-200 text-neutral-400 cursor-not-allowed shadow-inner";

  return (
    <button
      type="button"
      aria-label={`Tebak ${value}`}
      disabled={disabled || used}
      onClick={() => onClick(value)}
      className={[
        base,
        disabled || used ? dim : enabled,
        active ? "ring-2 ring-[#F59E0B]/60" : "",
      ].join(" ")}
    >
      {value}
    </button>
  );
}
