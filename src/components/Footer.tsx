const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t-2 border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            © {currentYear} Lenny Kibe Wanjohi. All rights reserved.
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            Built with passion & precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
