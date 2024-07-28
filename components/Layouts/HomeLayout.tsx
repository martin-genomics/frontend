"use client";
import React, { useState, ReactNode, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from "@material-tailwind/react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);


  Aos.init({
    duration: 1000,
    
  })



  return (
    <>
            <ThemeProvider
            
              value={{
                button: {
                  defaultProps: {
                    className: 'bg-primary'
                  },
                  valid: { },

                },
                input: {
                  defaultProps: {
                    className:'bg-primary',
                    containerProps:{
                      className: 'border-primary'
                    }
                  }
                }
              }}
            >
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden scrollbar-hide">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>

            <div data-aos='slide-up' className="mx-auto max-w-screen-2xl  ml-72 md:p-6 2xl:p-10 mt-10 scrollbar-hide">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
            </ThemeProvider>
      
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
