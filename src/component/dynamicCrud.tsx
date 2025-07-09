"use client";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addItem, updateItem, deleteItem } from "@/app/store/slices/navSlice";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, TextField, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton } from "@mui/material";

export default function DynamicCrud() {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.nav.items);
    const [title, setTitle] = useState("");
    const [editId, setEditId] = useState<number | null>(null);

    const handleAddOrUpdate = () => {
        if (editId) {
            dispatch(updateItem({ id: editId, title }));
            setEditId(null);
        } else {
            dispatch(addItem(title));
        }
        setTitle("");
    };

    const handleEdit = (item: { id: number; title: string }) => {
        setTitle(item.title);
        setEditId(item.id);
    };
    return (
        <>
            <Paper component="form" onSubmit={(e) => {
                e.preventDefault();
                handleAddOrUpdate();
            }} sx={{ padding: "20px", borderRadius: 2 }} elevation={3}>
                <Typography variant="h6">Dynamic Side Navigation</Typography>
                <TextField
                    label="Item Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ mr: 2, mt: 2 }}
                />
                <Button variant="contained" onClick={handleAddOrUpdate} sx={{ mt: 3 }}>
                    {editId ? "Update" : "Add"}
                </Button>
            </Paper>
            <Paper elevation={3} sx={{ borderRadius: 2 }}>
                <Table style={{ marginTop: 20 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((user, index) => (
                            <TableRow key={user.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{user.title}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="edit" onClick={() => handleEdit(user)} color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => dispatch(deleteItem(user.id))} color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </>
    );
}
