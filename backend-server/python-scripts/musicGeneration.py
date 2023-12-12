import os
import time

from transformers import AutoProcessor, MusicgenForConditionalGeneration
import sys
import scipy
from IPython.display import Audio


def generate_music(input_param):
    processor = AutoProcessor.from_pretrained("facebook/musicgen-small")
    model = MusicgenForConditionalGeneration.from_pretrained("facebook/musicgen-small")

    inputs = processor(
        text=[input_param],
        padding=True,
        return_tensors="pt",
    )
    audio_values = model.generate(**inputs, max_new_tokens=256)
    sampling_rate = model.config.audio_encoder.sampling_rate
    script_dir = os.path.dirname(os.path.abspath(__file__))
    parent_dir = os.path.dirname(script_dir)
    output_directory = os.path.join(parent_dir, 'generated-music')
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)
    timestamp = time.strftime("%Y%m%d-%H%M%S")
    filename = f"musicgen_out_{timestamp}.wav"
    output_path = os.path.join(output_directory, filename)
    scipy.io.wavfile.write(output_path, rate=sampling_rate, data=audio_values[0, 0].numpy())
    relative_output_path = os.path.join('generated-music', filename)
    return filename


if __name__ == "__main__":
    input_text = sys.argv[1]
    # input_text = "moody"
    music_path = generate_music(input_text)
    print(music_path)
