
const Tab = () => {
  return (
    <div className="grid   justify-center mb-10">
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className="tab">
          Round Trip
        </a>
        <a role="tab" className="tab tab-active">
          One Way
        </a>
        <a role="tab" className="tab">
          Multi City
        </a>
      </div>
     
    </div>
  );
}

export default Tab
