const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-700/85 to-red-500/90">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-8xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg md:text-3xl mb-8">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <p className="text-sm mt-[20vh] text-neutral-100 md:text-xl">
          Meanwhile, you can visit our{" "}
          <a
            href="https://badbusiness.in"
            className="underline hover:text-white">
            website
          </a>{" "}
          or join our{" "}
          <a
            href="https://community.badbusiness.in"
            className="underline hover:text-white">
            community
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
