import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
const Header = () => {
    return <>
    <nav className="py-4 flex justify-between items-center">
        <Link to="/">
        <img src="/logo.png" alt="Hirrd Logo" className="h-20"/>
        </Link>

        <Button variant="outline">Login</Button>
        {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
    </nav>
    </>;
};

export default Header;