import React from "react";
import img from "../../../assets/images/payslipLogo.png";
const PaySliip = () => {
  return (
    <div>
      <h2> Payslip</h2>
      <h4>Dashboard / Payslip</h4>
      <div className="mt-3 bg-white">
        <div className="">
          <h2 className="text-center p-3">
            PAYSLIP FOR THE MONTH OF FEB 2019
          </h2>
          <div className="d-flex justify-content-around">
            <div>
                <img src={img} alt="" />
              <h4>
                Dreamguy's Technologies <br />
                3864 Quiet Valley Lane,
                <br />
                Sherman Oaks, CA, 91403
              </h4>
              <h3>John Doe </h3>
              <h4>Web Designer</h4>
              <h5> Employee ID: FT-0009 </h5>
              <h5> Joining Date: 1 Jan 2023 </h5>
            </div>
            <div>
              <h2>PAYSLIP #49029</h2>
              <h4>Salary Month: March, 2024</h4>
            </div>
          </div>
        </div>

        <div className=" d-md-flex justify-content-around container gap-3">

        <div>
        <table className="table">
            <h3>Earning</h3>

            <tbody className="table-rows mx-3">
              <tr>
                <td>Basic Salary</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>House Rent Allowance (H.R.A.)</td>
                <td>$45</td>
              </tr>
              <tr>
                <td>Other Allowance</td>
                <td>$45</td>
              </tr>
              <tr>
                <td>Conveyance</td>
                <td>$45</td>
              </tr>
              <tr>
                <td>Total Earnings</td>
                <td>$45</td>
              </tr>
            </tbody>
          </table>
        </div>

          <div>
            <h3>Deductions</h3>
            <tbody className="table-rows mx-3">
              <tr>
                <td>Tax Deducted at Source (T.D.S.)</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>ESI</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Provident Fund</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Loan</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Total Deductions</td>
                <td>$4500</td>
              </tr>
            </tbody>
          </div>

        </div>


        <h4 className="px-3 pb-3">
          Net Salary: $59698 (Fifty nine thousand six hundred and ninety eight
          only.)
        </h4>
      </div>
    </div>
  );
};

export default PaySliip;
