import PageShell from "@/components/PageShell";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-lg focus:bg-[var(--color-blue-500)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <PageShell />
    </>
  );
}
