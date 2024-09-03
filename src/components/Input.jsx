const Input = ({ url, handleChange, handleShorten }) => {
  return (
    <div className="bg-Very-Dark-Blue p-4 lg:p-10 relative -top-[50px] max-sm:-top-[70px] bottom-0 rounded-xl bg-input-desktop max-md:bg-input-mobile">
      <form className="flex max-sm:flex-col flex-wrap gap-4" onSubmit={handleShorten}>
        <input
          className="flex-1 p-4 max-sm:p-3 outline-none rounded-md text-lg "
          type="text"
          value={url}
          onChange={handleChange}
          placeholder="Shorten a link here..."
        />
        <input
          type="submit"
          value="Shorten it!"
          className="bg-Cyan py-4 px-8 text-white text-center rounded-md text-lg font-bold"
        />
      </form>
    </div>
  );
};

export default Input;
