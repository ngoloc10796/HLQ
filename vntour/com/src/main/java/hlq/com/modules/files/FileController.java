package hlq.com.modules.files;

import java.io.IOException;
import java.nio.file.Files;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import hlq.com.bean.ResponseBean;
import hlq.com.bean.UploadFileResponse;
import hlq.com.commons.BaseController;

@RestController
@RequestMapping("/api/file")
public class FileController extends BaseController {
	private static final Logger logger = LoggerFactory.getLogger(FileController.class);

	@Autowired
	private FileStorageService fileStorageService;

	@PostMapping("/uploadFile")
	public ResponseEntity<ResponseBean> uploadFile(@RequestParam("file") MultipartFile file) {
		String fileName = fileStorageService.storeFile(file);

		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/")
				.path(fileName).toUriString();
		ResponseBean response = new ResponseBean();
		response.setData(new UploadFileResponse(fileName, fileDownloadUri, file.getContentType(), file.getSize()));
		return response(response);
	}

//	@PostMapping("/uploadMultipleFiles")
//	public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
//		return Arrays.asList(files).stream().map(file -> uploadFile(file)).collect(Collectors.toList());
//	}

	@GetMapping("/getFile/{fileName:.+}")
	public ResponseEntity<byte[]> getFile(@PathVariable String fileName, HttpServletRequest request) {
		// Load file as Resource
		Resource resource = fileStorageService.loadFileAsResource(fileName);
		// Try to determine file's content type
		String contentType = "application/octet-stream";
		byte[] bytef = null;
		try {
			bytef = Files.readAllBytes(resource.getFile().toPath());
		} catch (IOException ex) {
			logger.info("Could not determine file type.");
		}

		return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body(bytef);
	}

	@GetMapping("/getFile/download/{fileName:.+}")
	public ResponseEntity<?> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
		// Load file as Resource
		Resource resource = fileStorageService.loadFileAsResource(fileName);

		// Try to determine file's content type
		String contentType = null;
		try {
			contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
		} catch (IOException ex) {
			logger.info("Could not determine file type.");
		}

		// Fallback to the default content type if type could not be determined
		if (contentType == null) {
			contentType = "application/octet-stream";
		}
		return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
				.body(resource);
	}
}