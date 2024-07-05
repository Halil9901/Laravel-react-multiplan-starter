<?php

// app/Http/Controllers/FileController.php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:jpeg,png,jpg,gif,svg,mp4,avi,mkv|max:20480',
            'fileable_id' => 'required|integer',
            'fileable_type' => 'required|string',
        ]);

        $file = $request->file('file');
        $path = $file->store('files', 's3');

        $storedFile = File::create([
            'filename' => $file->getClientOriginalName(),
            'path' => $path,
            'type' => $file->getMimeType(),
            'fileable_id' => $request->fileable_id,
            'fileable_type' => $request->fileable_type,
        ]);

        Storage::disk('s3')->setVisibility($path, 'public');

        return response()->json(['file' => $storedFile], 201);
    }

    public function show(File $file)
    {
        $url = Storage::disk('s3')->url($file->path);
        return response()->json(['url' => $url]);
    }

    public function update(Request $request, File $file)
    {
        $request->validate([
            'file' => 'required|mimes:jpeg,png,jpg,gif,svg,mp4,avi,mkv|max:20480',
        ]);

        // Delete the old file
        Storage::disk('s3')->delete($file->path);

        // Store the new file
        $newFile = $request->file('file');
        $path = $newFile->store('files', 's3');

        $file->update([
            'filename' => $newFile->getClientOriginalName(),
            'path' => $path,
            'type' => $newFile->getMimeType(),
        ]);

        Storage::disk('s3')->setVisibility($path, 'public');

        return response()->json(['file' => $file], 200);
    }

    public function destroy(File $file)
    {
        Storage::disk('s3')->delete($file->path);
        $file->delete();

        return response()->json(null, 204);
    }
}

