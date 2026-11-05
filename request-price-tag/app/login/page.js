import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute -right-5 -top-28 z-0 h-[345px] w-[42%] rounded-b-[80px] rounded-bl-[180px] bg-gradient-to-br from-secondary via-secondary to-primary shadow-md max-md:h-[220px] max-md:w-[75%]" />

      <div className="absolute -bottom-36 -left-8 z-0 h-[330px] w-[52%] rounded-tl-[100px] rounded-tr-[180px] bg-gradient-to-br from-secondary via-secondary to-primary shadow-md max-md:h-[180px] max-md:w-[85%]" />

      {/* Decorative Circles */}
      <div className="absolute left-[1.5%] top-[6%] z-0 h-[135px] w-[135px] rounded-full bg-gradient-to-br from-secondary to-primary max-md:h-[75px] max-md:w-[75px]" />

      <div className="absolute left-[24.5%] top-[22%] z-0 h-[45px] w-[45px] rounded-full bg-gradient-to-br from-secondary to-primary max-md:left-auto max-md:right-[8%]" />

      <div className="absolute left-[33%] top-[42%] z-0 h-[45px] w-[45px] rounded-full bg-gradient-to-br from-secondary to-primary max-md:hidden" />

      <div className="absolute right-[1.5%] top-[68%] z-0 h-[45px] w-[45px] rounded-full bg-gradient-to-br from-secondary to-primary max-md:hidden" />

      <div className="absolute bottom-[6%] right-[10%] z-0 h-[68px] w-[68px] rounded-[50%_50%_0_50%] bg-gradient-to-br from-secondary to-primary max-md:h-[45px] max-md:w-[45px]" />

      {/* Main Container */}
      <div className="relative z-10 grid min-h-screen w-full max-w-[1440px] grid-cols-2 items-center px-[5%] max-md:grid-cols-1 max-md:gap-9 max-md:px-5 max-md:py-12">
        {/* Logo Section */}
        <section className="flex items-center justify-start max-md:justify-center">
          <div className="flex items-center gap-10">
            <div className="image-logo">
              <Image
                src="/images/logo-new.png"
                alt="Lawson Station Logo"
                width={100}
                height={100}
                priority
              />
            </div>
            <div className="text-logo text-primary text-heading font-bold ">Requset Price Tag</div>
          </div>
        </section>

        {/* Login Card */}
        <section className="flex items-center justify-center">
          <form className="card-default min-h-[750px] w-full max-w-[500px] px-[54px] py-9 max-md:min-h-[400px] max-md:max-w-[380px] max-md:px-[30px]">
            {/* Title */}
            <h1 className="mb-[26px] text-center text-heading font-semibold text-black">
              Login
            </h1>

            {/* Username */}
            <div className="mb-[17px] flex flex-col gap-2">
              <label
                htmlFor="username"
                className="text-label font-medium text-gray"
              >
                ชื่อผู้ใช้ <span className="text-danger">*</span>
              </label>

              <input
                id="username"
                name="username"
                type="text"
                placeholder="กรุณากรอกชื่อผู้ใช้"
                autoComplete="username"
                required
                className="input-default"
              />
            </div>

            {/* Password */}
            <div className="mb-1 flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-label font-medium text-gray"
              >
                รหัสผ่าน <span className="text-danger">*</span>
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                autoComplete="current-password"
                required
                className="input-default"
              />
            </div>

            {/* Forgot Password */}
            <div className="mb-[27px] flex justify-end">
              <a
                href="/forgot-password"
                className="text-caption text-secondary hover:underline"
              >
                ลืมรหัสผ่าน?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              path="/printing_request"
              className="btn-primary w-full text-body font-medium active:scale-[0.98]"
            >
              เข้าสู่ระบบ
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
