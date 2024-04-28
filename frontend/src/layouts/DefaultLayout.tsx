 
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
 
 
 
const DefaultLayout = () => {
 
  return (
    <div className="dark:bg-body dark:text-bodydark ">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex   overflow-hidden">
       
        {/* <!-- ===== Content Area Start ===== --> */}
        <div

          className="relative flex flex-1 flex-col overflow-y-hidden overflow-x-hidden default-custom-scrollbar"
        >
          
          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="bg-body">
            <div className="mx-auto">
            <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>  </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
     
   
  );
};
export default DefaultLayout;
