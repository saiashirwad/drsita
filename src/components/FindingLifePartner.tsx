import type { Component } from "solid-js";
import { createSignal } from "solid-js";

interface FormData {
	name: string;
	age: string;
	sex: string;
	city: string;
	email: string;
	duration: string;
	timing: string;
	format: string;
	topics: string[];
	specificQuestions: string;
	attendance: string;
	contactPreference: string;
}

const FindingLifePartner: Component = () => {
	const [formData, setFormData] = createSignal<FormData>({
		name: "",
		age: "",
		sex: "",
		city: "",
		email: "",
		duration: "",
		timing: "",
		format: "",
		topics: [],
		specificQuestions: "",
		attendance: "",
		contactPreference: "",
	});

	const [isSubmitting, setIsSubmitting] = createSignal(false);
	const [submitStatus, setSubmitStatus] = createSignal<
		"idle" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Log the form data for now
			console.log("Form submitted:", formData());

			// Here you'll add your actual submission logic
			// await submitToAPI(formData());

			setSubmitStatus("success");
		} catch (error) {
			console.error("Submission error:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleTopicChange = (topic: string) => {
		const currentTopics = formData().topics;
		const updatedTopics = currentTopics.includes(topic)
			? currentTopics.filter((t) => t !== topic)
			: [...currentTopics, topic];

		setFormData((prev) => ({ ...prev, topics: updatedTopics }));
	};

	return (
		<form onSubmit={handleSubmit} class="space-y-8">
			{/* Basic Information */}
			<div class="space-y-6">
				<h3 class="text-2xl font-display text-text">Basic Information</h3>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label class="block text-subtle mb-2">Name (Optional)</label>
						<input
							type="text"
							class="w-full px-4 py-2 rounded-lg bg-surface/50 border border-highlight-med/10 focus:border-highlight-med/20 outline-none"
							value={formData().name}
							onInput={(e) =>
								setFormData((prev) => ({
									...prev,
									name: e.currentTarget.value,
								}))
							}
						/>
					</div>

					<div>
						<label class="block text-subtle mb-2">Age (Optional)</label>
						<input
							type="number"
							class="w-full px-4 py-2 rounded-lg bg-surface/50 border border-highlight-med/10 focus:border-highlight-med/20 outline-none"
							value={formData().age}
							onInput={(e) =>
								setFormData((prev) => ({ ...prev, age: e.currentTarget.value }))
							}
						/>
					</div>
				</div>

				<div>
					<label class="block text-subtle mb-2">Sex (Required)</label>
					<select
						class="w-full px-4 py-2 rounded-lg bg-surface/50 border border-highlight-med/10 focus:border-highlight-med/20 outline-none"
						value={formData().sex}
						onChange={(e) =>
							setFormData((prev) => ({ ...prev, sex: e.currentTarget.value }))
						}
						required
					>
						<option value="">Select...</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
				</div>
			</div>

			{/* Event Preferences */}
			<div class="space-y-6">
				<h3 class="text-2xl font-display text-text">Event Preferences</h3>

				<div>
					<label class="block text-subtle mb-2">Preferred Duration</label>
					<select
						class="w-full px-4 py-2 rounded-lg bg-surface/50 border border-highlight-med/10 focus:border-highlight-med/20 outline-none"
						value={formData().duration}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								duration: e.currentTarget.value,
							}))
						}
					>
						<option value="">Select...</option>
						<option value="one-day">One-day seminar (9 AM – 6 PM)</option>
						<option value="two-day">Two-day workshop</option>
						<option value="flexible">Not sure / Either is fine</option>
					</select>
				</div>

				<div>
					<label class="block text-subtle mb-2">Preferred Timing</label>
					<select
						class="w-full px-4 py-2 rounded-lg bg-surface/50 border border-highlight-med/10 focus:border-highlight-med/20 outline-none"
						value={formData().timing}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								timing: e.currentTarget.value,
							}))
						}
					>
						<option value="">Select...</option>
						<option value="weekdays">Weekdays</option>
						<option value="weekends">Weekends</option>
						<option value="flexible">Flexible / No preference</option>
					</select>
				</div>
			</div>

			{/* Topics */}
			<div class="space-y-6">
				<h3 class="text-2xl font-display text-text">Topics of Interest</h3>

				<div class="space-y-4">
					{[
						"Identifying core values and qualities in a partner",
						"Red flags and deal-breakers",
						"Financial compatibility and planning",
						"Dealing with family expectations",
						"Communication and conflict resolution",
						"Emotional maturity and mental health",
					].map((topic) => (
						<label class="flex items-start gap-3">
							<input
								type="checkbox"
								class="mt-1"
								checked={formData().topics.includes(topic)}
								onChange={() => handleTopicChange(topic)}
							/>
							<span class="text-subtle">{topic}</span>
						</label>
					))}
				</div>
			</div>

			{/* Specific Questions */}
			<div class="space-y-6">
				<h3 class="text-2xl font-display text-text">Your Questions</h3>

				<div>
					<label class="block text-subtle mb-2">
						Do you have any specific questions or topics you'd like us to cover?
					</label>
					<textarea
						class="w-full px-4 py-2 rounded-lg bg-surface/50 border border-highlight-med/10 focus:border-highlight-med/20 outline-none min-h-[100px]"
						value={formData().specificQuestions}
						onInput={(e) =>
							setFormData((prev) => ({
								...prev,
								specificQuestions: e.currentTarget.value,
							}))
						}
					/>
				</div>
			</div>

			{/* Contact Preference */}
			<div class="space-y-6">
				<h3 class="text-2xl font-display text-text">Stay Updated</h3>

				<div>
					<label class="block text-subtle mb-2">Email (Optional)</label>
					<input
						type="email"
						class="w-full px-4 py-2 rounded-lg bg-surface/50 border border-highlight-med/10 focus:border-highlight-med/20 outline-none"
						value={formData().email}
						onInput={(e) =>
							setFormData((prev) => ({ ...prev, email: e.currentTarget.value }))
						}
						placeholder="Enter your email to receive updates"
					/>
				</div>
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isSubmitting()}
				class="w-full px-8 py-3 rounded-full bg-love/10 text-love hover:bg-love/20 transition-colors duration-300 font-medium disabled:opacity-50"
			>
				{isSubmitting() ? "Submitting..." : "Submit Response"}
			</button>

			{/* Status Messages */}
			{submitStatus() === "success" && (
				<p class="text-foam text-center">Thank you for your response!</p>
			)}
			{submitStatus() === "error" && (
				<p class="text-love text-center">
					There was an error submitting your response. Please try again.
				</p>
			)}
		</form>
	);
};

export default FindingLifePartner;
