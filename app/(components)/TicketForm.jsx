"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status !== 201) {
        console.error("Failed to create ticket", res.message);
        return;
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Error creating ticket", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-full lg:w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Ticket</h3>

        <label>Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          required={true}
          onChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          required={true}
          onChange={handleChange}
          rows={5}
        />

        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Issue</option>
          <option value="Software Issue">Software Issue</option>
          <option value="Network Problem">Network Issue</option>
          <option value="Project">Project</option>
        </select>

        <label>Priority:</label>
        <div>
          <input
            type="radio"
            name="priority"
            value={1}
            checked={formData.priority == 1}
            onChange={handleChange}
          />
          <label>Low</label>

          <input
            type="radio"
            name="priority"
            value={2}
            checked={formData.priority == 2}
            onChange={handleChange}
          />
          <label>Medium</label>

          <input
            type="radio"
            name="priority"
            value={3}
            checked={formData.priority == 3}
            onChange={handleChange}
          />
          <label>High</label>
        </div>

        <label>
          Progress:{" "}
          <span
            className={`${formData.progress > 49 ? "text-green-300" : formData.progress > 20 ? "text-yellow-500" : "text-red-300"}`}
          >
            {formData.progress}%
          </span>{" "}
        </label>
        <input
          type="range"
          id="progress"
          name="progress"
          min={0}
          max={100}
          value={formData.progress}
          onChange={handleChange}
        />

        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <input type="submit" className="btn" value={loading ? "Creating..." : "Create Ticket"} />
      </form>
    </div>
  );
};

export default TicketForm;
