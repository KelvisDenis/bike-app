import { useState } from "react";
import "../styles/pages/PartsEdit.css";
import SidBar from "../components/Sidbar";
import type { Part } from "../interfaces/IPart";
import Input from "../components/Input";
import Form from "../components/Form";
import Table from "../components/Table";



function PartsEdit() {
    // stats 
    const [parts, setParts] = useState<Part[]>([
        { id: 1, name: "Pastilha de Freio", category: "Moto", price: "89.90", stock: 10 },
        { id: 2, name: "Corrente Reforçada", category: "Moto", price: "159.90", stock: 5 },
        { id: 3, name: "Câmara de Ar", category: "Bike", price: "29.90", stock: 20 },
    ]);

    const [form, setForm] = useState<Omit<Part, "id">>({
        name: "",
        category: "Moto",
        price: "",
        stock: 0,
    });

    const [editingId, setEditingId] = useState<number | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isModalCreate, setIsModalCreate] = useState(false);

    // actions 
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();

        setParts((prev) => [
            ...prev,
            { id: Date.now(), ...form },
        ]);

        setForm({ name: "", category: "Moto", price: "", stock: 0 });
    }

    const handleEdit = (part: Part) => {
        setEditingId(part.id);
        setForm({
            name: part.name,
            category: part.category,
            price: part.price,
            stock: part.stock,
        });
        setIsModalOpen(true);
    }

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();

        if (!editingId) return;

        setParts((prev) =>
            prev.map((p) =>
                p.id === editingId ? { id: editingId, ...form } : p
            )
        );

        setIsModalOpen(false);
        setEditingId(null);
    }

    const handleDelete = (id: number) => {
        if (confirm("Deseja realmente excluir esta peça?")) {
            setParts((prev) => prev.filter((p) => p.id !== id));
        }
    }

    const handleClickNew = () => {
        setIsModalCreate(!isModalCreate)
    }

    return (
        <div className="admin-layout">
            <SidBar />

            <main className="admin-content">
                <h1>Gerenciar Peças</h1>


                {/* FORM CRIAR */}
                {isModalCreate && (
                    <div className="modal-overlay">
                        <div className="modal">

                            <Form title="Nova Peça" onSubmit={handleCreate} submitText="Criar" handleCancel={handleClickNew}>
                                <Input
                                    name="name"
                                    placeholder="Nome da peça"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                                <select
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                >
                                    <option value="Moto">Moto</option>
                                    <option value="Bike">Bike</option>
                                </select>

                                <Input
                                    name="price"
                                    placeholder="Preço"
                                    value={form.price}
                                    onChange={handleChange}
                                    required
                                />

                                <Input
                                    name="stock"
                                    placeholder="Estoque"
                                    value={form.stock}
                                    onChange={handleChange}
                                    required
                                />
                            </Form>

                        </div>
                    </div>
                )}


                <Table
                    title="Lista de Peças"
                    actionLabel="+ Adicionar"
                    onActionClick={handleClickNew}
                    data={parts}
                    columns={[
                        { key: "name", label: "Nome" },
                        { key: "category", label: "Categoria" },
                        {
                            key: "price",
                            label: "Preço",
                            render: (row) => `R$ ${row.price}`,
                        },
                        { key: "stock", label: "Estoque" },
                    ]}
                    onEdit={handleEdit}
                    onDelete={(row) => handleDelete(row.id)}
                />

            </main>

            {/* MODAL EDITAR */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <Form title="Editar Peças" submitText="Salvar" onSubmit={handleUpdate} handleCancel={() => setIsModalOpen(false)}>
                            <Input
                                name="name"
                                placeholder=""
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                            >
                                <option value="Moto">Moto</option>
                                <option value="Bike">Bike</option>
                            </select>

                            <Input
                                name="price"
                                placeholder=""
                                value={form.price}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                name="stock"
                                placeholder=""
                                value={form.stock}
                                onChange={handleChange}
                                required
                            />
                        </Form>

                    </div>
                </div>
            )}
        </div>
    );
}

export default PartsEdit;
