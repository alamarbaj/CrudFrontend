import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/api";
import { Link } from "react-router-dom";
import PaginationComponent from "./PaginationComponent";




const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '&>*': {
            background: '#000000',
            color: '#FFFFFF',
            fontsize: 15
        }
    },
    row: {
        '&>*': {
            fontsize: 20
        }
    }
})


const AllUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(10);
    // let [searchData, setSearchData] = useState("");
    const [TotalCount, setTotalCount] = useState(0)
    const [users, setUsers] = useState([])
    const classes = useStyle();
    const [value, setValue] = useState('')
    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response)
        setUsers(response.data)
        setTotalCount(response.data.length)
        // alert(response.data.length)
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <div>
            <br />
            <input style={{ marginRight: 10 }} type="text" placeholder="Search Name/Email.." value={value}
                onChange={e => setValue(e.target.value)} />
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Emai</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell>Designation</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>


                    {
                       TotalCount > 0 ? users.filter(item => {
                            if (!value) return true
                            if (item.Name.includes(value) || item.Email.includes(value) || item.Designation.includes(value)) {
                                return true
                               
                            }
                            
                        })
                            .map((user, inx) => {
                                return (
                                    <TableRow className={inx}>
                                        <TableCell>{inx + 1}</TableCell>
                                        <TableCell>{user.Name}</TableCell>
                                        <TableCell>{user.Email}</TableCell>
                                        <TableCell>{user.Salary}</TableCell>
                                        <TableCell>{user.Designation}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                            <Button variant="contained" color="secondary" onClick={() => deleteUserData(user._id)} >Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                            : "No Records Found"}

                </TableBody>
            </Table>
            <br />
            <PaginationComponent
                MOCK_DATA={TotalCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                itemPerPage={itemPerPage}
                setItemPerPage={setItemPerPage}
            />
        </div>

    )
}



export default AllUsers;