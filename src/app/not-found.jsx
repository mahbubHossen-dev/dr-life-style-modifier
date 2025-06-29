export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-9xl text-blue-600">404</h1>
            <h2 className="text-2xl font-bold">Something's missing.</h2>
            <p className="text-gray-500 mt-2">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
            <a href="/" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Back to Homepage
            </a>
        </div>
    );
}