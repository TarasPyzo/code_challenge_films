function Films ({ totalCountOfItems, films }) {
  return (
    <>
      <div className="font-bold italic flex justify-end mb-5">
        Total count: {totalCountOfItems}
      </div>
      <div className="columns-3 text-center border-2 border-teal-700">
        <div className="font-bold text-lg">Title</div>
        <div className="font-bold text-lg">Director</div>
        <div className="font-bold text-lg">ReleaseDate</div>
      </div>
      <div className="mb-10">
        {films?.map(item => (
          <div key={item.id} className="columns-3 text-center">
            <div className="border-2 border-teal-700">{item.title}</div>
            <div className="border-2 border-teal-700">{item.director}</div>
            <div className="border-2 border-teal-700">{item.releaseDate}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Films;
