import { Radio } from "@mui/material";

function AddressCard() {
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };
  return (
    <div className="p-5 border rounded-md flex">
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-btn"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Suhasi</h1>
        <p className="w-[320px]">City rod, Surat, Gujarat - 395010</p>
        <p>
          <strong> Mobile : </strong> 785462139
        </p>
      </div>
    </div>
  );
}

export default AddressCard;
