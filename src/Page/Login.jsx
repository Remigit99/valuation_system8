

const Login = () => {
  return (

    <div className="min-h-screen flex flex-col">
      <header className="bg-uba-red text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold italic">Valuation Management System</h1>
        <div className="text-2xl font-black">UBA</div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white p-8 border-t-4 border-uba-red shadow-sm">
          <h2 className="text-uba-red text-2xl mb-6">Login</h2>
          <form className="space-y-4">
            <div className="flex items-center">
              <label className="w-32 text-sm text-gray-600">User Name</label>
              <input type="text" className="flex-1 border p-1 outline-none focus:ring-1 ring-uba-red" />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-sm text-gray-600">Password</label>
              <input type="password" className="flex-1 border p-1 outline-none focus:ring-1 ring-uba-red" />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-sm text-gray-600">Token</label>
              <input type="text" className="flex-1 border p-1 outline-none focus:ring-1 ring-uba-red" />
            </div>
            <button className="ml-32 px-4 py-1 bg-gray-100 border text-sm hover:bg-gray-200">
              Log in
            </button>
          </form>
        </div>
        <div className="mt-12 opacity-50">
           {/* Replace with your local logo asset */}
           <h2 className="text-4xl font-bold text-uba-red italic">Valuation Management</h2>
        </div>
      </main>
    </div>
  );
}


export default Login