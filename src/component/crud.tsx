"use client";

import React, { useState } from "react";
import { Button, TextField, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, IconButton } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function UsersPage() {
  const [users, setUsers] = useState([{ id: 1, name: "John" }]);
  console.log(users)
  const [name, setName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (editId) {
      setUsers(users.map(user => user.id === editId ? { ...user, name } : user));
      setEditId(null);
    } else {
      const newUser = { id: Date.now(), name };
      setUsers([...users, newUser]);
    }
    setName("");
  };

  const handleEdit = (id: number) => {
    const user = users.find(u => u.id === id);
    if (user) {
      setEditId(id);
      setName(user.name);
    }
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <>
      <Paper component="form" onSubmit={(e) => {
        e.preventDefault();
        handleAddOrUpdate();
      }} sx={{ padding: "20px", borderRadius: 2 }} elevation={3}>
        <Typography variant="h6">CRUD</Typography>

        <TextField
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
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
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit" onClick={() => handleEdit(user.id)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={() => handleDelete(user.id)} color="error">
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
