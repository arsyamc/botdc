import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const prompt = messages[messages.length - 1]?.content?.toLowerCase();

    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided." },
        { status: 400 }
      );
    }

    // List of khodams
    const khodams = [
      "freya", "amanda", "gita", "lulu", "jessi", "shani", "raisha",
      "muthe", "christy", "lia", "cathy", "cynthia", "daisy", "indira",
      "eli", "michie", "gracia", "ella", "adel", "feni", "marsha", "zee", "lyn",
      "indah", "elin", "chelsea", "danella", "gendis", "gracie", "greesel", "flora",
      "olla", "kathrina", "oniel", "fiony", "callie", "alya", "anindya",
      "aralie", "delynn", "shasa", "lana", "erine", "fritzy", "lily", "trisha",
      "moreen", "levi", "nayla", "nachia", "oline", "regie", "ribka", "nala", "kimmy",
      "ci jabieb"
    ];

    let weightedKhodams = khodams.flatMap(name => {
      if (name === "trisha" && (prompt.includes("nanda") || prompt.includes("arsya"))) {
        return Array(10).fill(name); // Increase the probability by adding more "trisha"
      }
      if (name === "ci jabieb") {
        return Array(5).fill(name); // Increase the probability by adding more "ci jabieb"
      }
      return name;
    });

    // Special case for "farhan"
    if (prompt.includes("farhan")) {
      weightedKhodams = ["indah", "greesel", "fritzy"];
    }

    // Simulate delay for animation effect
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay

    // Randomly select a khodam from the weighted list
    const selectedKhodam = weightedKhodams[Math.floor(Math.random() * weightedKhodams.length)];

    // Respond with the selected khodam
    return NextResponse.json(
      { messages: `Oshi dari ${prompt} adalah ${selectedKhodam}.` },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}
