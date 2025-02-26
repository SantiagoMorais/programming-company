export const Background = () => {
  return (
    <div
      className="after:to-background absolute top-0 left-0 -z-20 h-full max-h-[1080px] w-full bg-linear-to-b from-transparent to-red-500 opacity-20 after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:max-h-[1080px] after:w-full after:bg-linear-to-b after:from-transparent"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23e3e3e3' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  );
};
