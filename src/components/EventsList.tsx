import { createSignal, For, type Component } from "solid-js";
import Button from "./Button.tsx";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  status: string;
}

interface Props {
  initialEvents: Event[];
  categories: readonly string[];
}

const EventsList: Component<Props> = (props) => {
  const [selectedCategory, setSelectedCategory] = createSignal("All Events");
  const [events, setEvents] = createSignal(props.initialEvents);

  const filteredEvents = () => {
    if (selectedCategory() === "All Events") {
      return events();
    }
    return events().filter(
      (event) => event.category.toLowerCase() === selectedCategory().toLowerCase()
    );
  };

  return (
    <div class="space-y-8">
      {/* Filter Buttons */}
      <div class="flex flex-wrap gap-4">
        <For each={props.categories}>
          {(category) => (
            <button
              class={`px-6 py-2 rounded-full border transition-colors ${
                selectedCategory() === category
                  ? "border-highlight-med/20 text-text bg-surface"
                  : "border-highlight-med/10 text-subtle hover:text-text hover:border-highlight-med/20"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )}
        </For>
      </div>

      {/* Events List */}
      <div class="space-y-8">
        <For each={filteredEvents()}>
          {(event) => (
            <div class="border border-highlight-med/10 rounded-[32px] p-8 hover:border-highlight-med/20 transition-all">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-2xl font-display text-text mb-2">
                    {event.title}
                  </h3>
                  <p class="text-foam">{event.date}</p>
                </div>
                <span class="px-4 py-1 rounded-full bg-surface text-subtle text-sm">
                  {event.category}
                </span>
              </div>
              <p class="text-subtle/90 mb-4">{event.description}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-subtle">
                  <svg
                    class="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
                <Button href="/contact" color="pine" size="sm">
                  Register Interest
                </Button>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default EventsList; 