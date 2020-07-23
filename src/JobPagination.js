import React from "react";
import { Pagination } from "react-bootstrap"

export default function JobPagination({page, setpage}) {

    return(
        <Pagination>
            <Pagination.Prev />
            <Pagination.Next />
        </Pagination>
    );
}