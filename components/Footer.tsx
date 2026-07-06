export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Lanre Adebayo | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}