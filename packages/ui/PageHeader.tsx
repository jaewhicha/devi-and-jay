export const PageHeader = (props: any) => {
  const { title } = props;

  return (
    <div className="s-pageheader">
      <div className="row">
        <div className="column large-12">
          <h1 className="page-title">
            {/* <span className="page-title__small-type">Category:</span> */}
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
