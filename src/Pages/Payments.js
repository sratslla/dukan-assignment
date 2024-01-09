import React from "react";
import "./Payments.css";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import BoxContainer from "../Components/BoxContainer";
import TableSearch from "../Components/Table/TableSearch";
import Table from "../Components/Table/Table";

const Payments = () => {
	return (
		<div className="payments-main">
			<Navbar />
			<div className="payments-right">
				<Header />
				<div className="prb-main">
					<aside className="pr-overview">
						<h1>Overview</h1>
						<select>
							<option>Last Month</option>
						</select>
					</aside>
					<div className="pr-box-container">
						<BoxContainer title={"Online orders"} value={231} />
						<BoxContainer
							title={"Amount received"}
							value={"₹23,92,312.19"}
						/>
					</div>
					<aside className="pr-transaction">
						<h1>Transactions | This Month</h1>
					</aside>
					<div className="payment-table-container">
						<TableSearch />
						<Table />
					</div>
					<div className="pagging">
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
									fill="#4D4D4D"
								/>
							</svg>{" "}
							Previous
						</button>
						<div className="pagging-numbers">
							<div>1</div>
							<div>...</div>
							<div>10</div>
							<div>11</div>
							<div>12</div>
							<div>13</div>
							<div>14</div>
							<div>15</div>
							<div>16</div>
							<div>17</div>
							<div>18</div>
						</div>
						<button>
							Next{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
									fill="#4D4D4D"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payments;
