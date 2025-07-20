const Footer = () => (
    <footer className="bg-yellow-500 text-black p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold">SURGE</div>
      <div className="mt-2 md:mt-0 text-center">
        <p>© Copyright 2025 Surge</p>
        <p>Shiv Nadar University, Greater Noida</p>
        <p>surge@snu.edu.in</p>
        <a href="https://www.surgepub.in" className="underline">https://www.surgepub.in</a>
      </div>
      <div className="flex space-x-2 mt-2 md:mt-0">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </footer>
  );
  
  export default Footer;