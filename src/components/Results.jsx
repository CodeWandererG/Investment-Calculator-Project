import { calculateInvestmentResults } from "../util/investment"
import { formatter } from "../util/investment";
export function Results({input}){
    const data = calculateInvestmentResults(input);
    const initialInvestment = 
        data[0].valueEndOfYear -
        data[0].interest -
        data[0].annualInvestment;

    console.log(data);
    return <table id="result">
        <thead>
            <tr>
                <th>Year </th>
                <th>Investment Value </th>
                <th>Interest (Year) </th>
                <th>Total Interest </th>
                <th>Invested Capital </th>
            </tr>
        </thead>
        <tbody>
            {data.map((item , index) => {
                const totalInterest = 
                    item.valueEndOfYear -
                    item.annualInvestment * item.year -
                    initialInvestment;

                const totalAmountInvested = item.valueEndOfYear - totalInterest;
                return <tr>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}