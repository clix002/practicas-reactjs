import { useFilters } from "../hooks/useFilters";

const Footer = () => {
  const { filters } = useFilters();
  return (
    <footer className="fixed bottom-5 rounded-lg bg-black/50 p-5 text-white">
      {JSON.stringify(filters, null, 2)}
    </footer>
  );
};

export default Footer;
