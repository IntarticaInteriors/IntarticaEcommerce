import Linksbar from "@/components/custom/Linksbar";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <div>
          <Linksbar/>
        </div>
        {children}
      </div>
    );
  }