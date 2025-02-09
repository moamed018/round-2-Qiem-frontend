import clientHomePage from "/src/assets/client-home-page-1.png"; // Adjust the path

function EmptyHomePage() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full h-full">
      <img
        src={clientHomePage}
        alt="home page"
        className="lg:w-[610px] lg:h-[400px] w-[300px] h-[200px"
      />
      <h1 id="home-page-header">
       لم تقم باضافة أي عقارات بعد
      </h1>
    </div>
  );
}

export default EmptyHomePage;
