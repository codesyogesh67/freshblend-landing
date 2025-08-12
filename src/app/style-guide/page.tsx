import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold tracking-tight">{children}</h2>;
}

function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="rounded-xl border overflow-hidden">
      <div className={`h-16 ${className}`} />
      <div className="px-3 py-2 text-sm text-muted-foreground">{name}</div>
    </div>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-12 space-y-12">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="[font-family:var(--font-serif)] text-3xl sm:text-4xl font-bold text-secondary">
          Style Guide • FreshBlend Café
        </h1>
        <p className="text-muted-foreground">
          Visual tokens and UI samples to keep the landing page consistent.
        </p>
      </header>

      {/* Colors */}
      <section className="space-y-4">
        <SectionTitle>Colors</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <Swatch name="primary" className="bg-primary text-white" />
          <Swatch name="secondary" className="bg-secondary text-white" />
          <Swatch name="accent" className="bg-accent text-white" />
          <Swatch name="background" className="bg-[--background]" />
          <Swatch name="muted" className="bg-muted" />
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-6">
        <SectionTitle>Typography</SectionTitle>

        <div className="space-y-2">
          <h1 className="[font-family:var(--font-serif)] text-4xl md:text-6xl font-bold text-secondary">
            Brewed Fresh, Served with Love
          </h1>
          <p className="text-muted-foreground md:text-lg max-w-2xl">
            Seasonal fruits, clean ingredients, and cozy vibes — crafted daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="[font-family:var(--font-serif)] text-2xl font-semibold">
              Heading Serif
            </h3>
            <p className="text-sm text-muted-foreground">
              Use for H1–H3 headings
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Body Sans</h3>
            <p className="text-sm text-muted-foreground">
              Use for paragraphs, UI text
            </p>
          </div>
        </div>
      </section>

      {/* Buttons (shadcn/ui with themed overrides) */}
      <section className="space-y-4">
        <SectionTitle>Buttons</SectionTitle>
        <div className="flex flex-wrap items-center gap-4">
          <Button className="btn bg-primary text-white hover:bg-secondary">
            Primary
          </Button>
          <Button
            variant="outline"
            className="btn border-primary text-primary hover:bg-primary hover:text-white"
          >
            Outline
          </Button>
          <Button variant="ghost" className="btn text-secondary hover:bg-muted">
            Ghost
          </Button>
          <Button
            variant="link"
            className="text-primary hover:text-secondary underline underline-offset-4"
          >
            Link
          </Button>
          <Button disabled className="btn bg-muted text-muted-foreground">
            Disabled
          </Button>
        </div>
      </section>

      {/* Forms */}
      <section className="space-y-4">
        <SectionTitle>Form Controls</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input id="name" placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="jane@example.com" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Write your message here…"
            />
          </div>
        </div>
      </section>

      {/* Card sample */}
      <section className="space-y-4">
        <SectionTitle>Card</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border p-6 bg-white/90 backdrop-blur shadow-sm space-y-2">
            <h4 className="[font-family:var(--font-serif)] text-2xl font-semibold text-secondary">
              Green Glow
            </h4>
            <p className="text-muted-foreground">
              Kale, apple, pineapple, ginger — balanced & bright.
            </p>
            <Button
              variant="link"
              className="text-primary hover:text-secondary underline underline-offset-4 px-0"
            >
              Learn more
            </Button>
          </div>
          <div className="rounded-xl border p-6 bg-white/90 backdrop-blur shadow-sm space-y-2">
            <h4 className="[font-family:var(--font-serif)] text-2xl font-semibold text-secondary">
              Berry Blend
            </h4>
            <p className="text-muted-foreground">
              Strawberry, blueberry, banana, oat milk — crowd favorite.
            </p>
            <Button
              variant="link"
              className="text-primary hover:text-secondary underline underline-offset-4 px-0"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="space-y-2">
        <SectionTitle>Notes</SectionTitle>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>
            Update brand tokens in <code>globals.css</code> under{" "}
            <code>:root</code> and <code>@theme inline</code>.
          </li>
          <li>
            Headings use <code>var(--font-serif)</code>; body uses{" "}
            <code>var(--font-sans)</code>.
          </li>
          <li>
            Buttons use shadcn/ui with light class overrides to match your
            palette.
          </li>
        </ul>
      </section>
    </main>
  );
}
