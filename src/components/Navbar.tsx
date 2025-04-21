import Link from "next/link";
import { Button } from "./ui/button";
import { HomeIcon, LogIn, LogInIcon, Sprout } from "lucide-react";
import ModeToggle from "./ModeToggle";
import { StackServerApp } from "@stackframe/stack";


async function Navbar() => {

const user = await StackServerApp.getUser();
const app = StackServerApp.urls;
  return (
  const user = stackServerApp.getUser();
  <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center h-16 justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-bold text-primary font-mono tracking-wider"
          >
            Plantinventory
          </Link>
        </div>

        {/* Navbar components */}

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/plants">
              <Sprout className="w-4 h-4" />
              <span className="hidden lg:inline">Plants</span>
            </Link>
          </Button>

          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/">
              <Sprout className="w-4 h-4" />
              <HomeIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Home</span>
            </Link>
          </Button>

          <ModeToggle />

          {/* Sign Button */}
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href={app.signIn}>
              <LogIn className="w-4 h-4" />
              <LogInIcon className="w-4 h-4"/>
              <span className="hidden lg:inline">Sign In</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
