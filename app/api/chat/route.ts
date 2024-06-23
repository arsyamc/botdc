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
    const khodams = ["freya", "ashel", "amanda", "gita", "lulu", "jessi", "shani", "raisha",
      "muthe", "chika", "christy", "lia", "cathy", "cynthia", "daisy", "indira",
      "eli", "michie", "gracia", "ella", "adel", "feni", "marsha", "zee", "lyn",
      "indah", "elin", "chelsea", "danella", "gendis", "gracie", "greesel", "flora",
      "olla", "kathrina", "oniel", "fiony", "callie", "alya", "anindya", "jeane",
      "aralie", "delynn", "shasa", "lana", "erine", "fritzy", "lily", "trisha",
      "moreen", "levi", "nayla", "nachia", "oline", "regie", "ribka", "nala", "kimmy"
    ];

    // Define weights with explicit type
    let weights: number[] = khodams.map(name => (name === "erine" ? 0.1 : 1)); // Very low weight for "erine"
    if (prompt.includes("nanda") || prompt.includes("arsya")) {
      const trishaIndex = khodams.indexOf("erine");
      if (trishaIndex !== -1) {
        weights[trishaIndex] = 10; // Increase the weight of "trisha"
      }
    }

    // Function to select a weighted random item
    function weightedRandom(items: string[], weights: number[]): string {
      const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
      const randomWeight = Math.random() * totalWeight;
      let weightSum = 0;

      for (let i = 0; i < items.length; i++) {
        weightSum += weights[i];
        if (randomWeight <= weightSum) {
          return items[i];
        }
      }
      return items[items.length - 1]; // Default return in case of rounding issues
    }

    // Simulate delay for animation effect
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay

    // Randomly select a khodam with weighted probability
    const selectedKhodam = weightedRandom(khodams, weights);

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
