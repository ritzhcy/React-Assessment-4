import React from 'react'

const Students = () => {
    return (
        <div>
            <h1>Students Details</h1>
            <table class="table  table-hover">
                <thead>
                    <tr class=" table table-dark table-striped-columns">
                        <th scope="col">Serial Number</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Social-Media-Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-light">
                        <th scope="row">1</th>
                        <td>Preeti</td>
                        <td>Choudhury</td>
                        <td>@instagram</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Bobby</td>
                        <td>Thompson</td>
                        <td>@facebook</td>
                    </tr>
                    <tr className="table-light">
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Charles</td>
                        <td>@instagram</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td colspan="2">castle king</td>
                        <td>@twitter</td>
                    </tr>
                    <tr className="table-light">
                        <th scope="row">5</th>
                        <td>Milly</td>
                        <td>White</td>
                        <td>@instagram</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Zeno</td>
                        <td>Milbourne</td>
                        <td>@instagram</td>
                    </tr>
                    <tr className="table-light">
                        <th scope="row">7</th>
                        <td>Shen</td>
                        <td>Willey</td>
                        <td>@instagram</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Ruby</td>
                        <td>Mathew</td>
                        <td>@facebook</td>
                    </tr>
                    <tr className="table-light">
                        <th scope="row">9</th>
                        <td>Jesse</td>
                        <td>Water</td>
                        <td>@instagram</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Students