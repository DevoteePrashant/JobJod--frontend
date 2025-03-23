import { useState } from "react"
import { Modal } from "./common/Modal"
import {
    Star
} from "lucide-react"
import { cn } from "./Jobseeker"

export const SkillModal = ({ skill, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: skill?.name || "",
        level: skill?.level || "Beginner",
        rating: skill?.rating || 3
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleRatingChange = rating => {
        setFormData(prev => ({ ...prev, rating }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        onSave(formData)
    }

    return (
        <Modal title={skill ? "Edit Skill" : "Add Skill"} onClose={onClose}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Skill Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md"
                        placeholder="e.g. React"
                    />
                </div>

                <div>
                    <label
                        htmlFor="level"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Proficiency Level
                    </label>
                    <select
                        id="level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rating
                    </label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map(rating => (
                            <button
                                key={rating}
                                type="button"
                                onClick={() => handleRatingChange(rating)}
                                className="p-1 focus:outline-none"
                            >
                                <Star
                                    className={cn(
                                        "w-6 h-6",
                                        rating <= formData.rating
                                            ? "text-purple-500 fill-purple-500"
                                            : "text-gray-300 fill-gray-300"
                                    )}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                    >
                        {skill ? "Update" : "Add"}
                    </button>
                </div>
            </form>
        </Modal>
    )
}