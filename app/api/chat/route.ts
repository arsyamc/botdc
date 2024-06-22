import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const prompt = messages[messages.length - 1]?.content;

    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided." },
        { status: 400 }
      );
    }

    // List of khodams
    const khodams = ["freya", "ashel", "amanda", "gita", "lulu", "jessi", "shani", "raisha",
      "muthe", "chika", "christy", "lia", "cathy", "cynthia", "daisy", "indira",
      "eli", "michie", "gracia", "ella", "adel", "feni", "marsha", "zee", "lyn",
      "indah", "elin", "chelsea", "danella", "gendis", "gracie", "greesel", "flora",
      "olla", "kathrina", "oniel", "fiony", "callie", "alya", "anindya", "jeane",
      "aralie", "delynn", "shasa", "lana", "erine", "fritzy", "lily", "trisha",
      "moreen", "levi", "nayla", "nachia", "oline", "regie", "ribka", "nala", "kimmy"
    ];

    // Simulate delay for animation effect
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

    // Randomly select a khodam
    const selectedKhodam = khodams[Math.floor(Math.random() * khodams.length)];

    // Respond with the selected khodam
    return NextResponse.json(
      { messages: `Khodam dari ${prompt} adalah ${selectedKhodam}.` },
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
